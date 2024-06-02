"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("../product/return-product.object");
const YooKassa = require("yookassa");
const yooKassa = new YooKassa({
    shopId: process.env['SHOP_ID'],
    secretKey: process.env['PAYMENT_TOKEN']
});
let OrderService = exports.OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.productReturnObject
                        }
                    }
                }
            }
        });
    }
    async getByUserId(userId) {
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.productReturnObject
                        }
                    }
                }
            }
        });
    }
    async placeOrder(dto, userId) {
        const total = dto.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        const order = await this.prisma.order.create({
            data: {
                status: dto.status,
                items: {
                    create: dto.items
                },
                total,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
        const payment = await yooKassa.createPayment({
            amount: {
                value: total.toFixed(2),
                currency: 'RUB'
            },
            payment_method_data: {
                type: 'bank_card'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'http://localhost:3000/thanks'
            },
            description: `Order #${order.id}`
        });
        return payment;
    }
    async updateStatus(dto) {
        if (dto.event === 'payment.waiting_for_capture') {
            const payment = await yooKassa.capturePayment(dto.object.id);
            return payment;
        }
        if (dto.event === 'payment.succeeded') {
            const orderId = Number(dto.object.description.split('#')[1]);
            await this.prisma.order.update({
                where: {
                    id: orderId
                },
                data: {
                    status: client_1.EnumOrderStatus.PAYED
                }
            });
            return true;
        }
        return true;
    }
};
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
