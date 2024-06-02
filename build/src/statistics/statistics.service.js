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
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let StatisticsService = exports.StatisticsService = class StatisticsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMain() {
        const ordersCount = await this.prisma.order.count();
        const reviewsCount = await this.prisma.review.count();
        const usersCount = await this.prisma.user.count();
        const totalAmount = await this.prisma.order.aggregate({
            _sum: {
                total: true
            }
        });
        return [
            {
                name: 'Orders',
                value: ordersCount
            },
            {
                name: 'Reviews',
                value: reviewsCount
            },
            {
                name: 'Users',
                value: usersCount
            },
            {
                name: 'Total amount',
                value: totalAmount._sum.total || 0
            }
        ];
    }
};
exports.StatisticsService = StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatisticsService);
