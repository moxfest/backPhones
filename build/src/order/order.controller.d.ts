import { OrderDto } from './order.dto';
import { OrderService } from './order.service';
import { PaymentStatusDto } from './payment-status.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAll(): Promise<(import(".prisma/client").Order & {
        items: (import(".prisma/client").OrderItem & {
            product: {
                createdAt?: Date;
                updatedAt?: Date;
                name?: string;
                slug?: string;
                description?: string;
                price?: number;
                images?: string[];
                orderItems?: import(".prisma/client").OrderItem[];
                reviews?: import(".prisma/client").Review[];
                category?: import(".prisma/client").Category;
                user?: import(".prisma/client").User;
                id?: number;
                categoryId?: number;
                userId?: number;
                _count?: import(".prisma/client").Prisma.ProductCountOutputType;
            };
        })[];
    })[]>;
    getByUserId(userId: number): Promise<(import(".prisma/client").Order & {
        items: (import(".prisma/client").OrderItem & {
            product: {
                createdAt?: Date;
                updatedAt?: Date;
                name?: string;
                slug?: string;
                description?: string;
                price?: number;
                images?: string[];
                orderItems?: import(".prisma/client").OrderItem[];
                reviews?: import(".prisma/client").Review[];
                category?: import(".prisma/client").Category;
                user?: import(".prisma/client").User;
                id?: number;
                categoryId?: number;
                userId?: number;
                _count?: import(".prisma/client").Prisma.ProductCountOutputType;
            };
        })[];
    })[]>;
    placeOrder(dto: OrderDto, userId: number): Promise<any>;
    updateStatus(dto: PaymentStatusDto): Promise<any>;
}
