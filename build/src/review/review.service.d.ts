import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';
import { ReviewDto } from './review.dto';
export declare class ReviewService {
    private prisma;
    private productService;
    constructor(prisma: PrismaService, productService: ProductService);
    getAll(): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        user?: import(".prisma/client").User;
        id?: number;
        userId?: number;
        rating?: number;
        text?: string;
        productId?: number;
        product?: import(".prisma/client").Product;
    }[]>;
    create(userId: number, dto: ReviewDto, productId: number): Promise<import(".prisma/client").Review>;
    getAverageValueByProductId(productId: number): Promise<{
        rating: number;
    }>;
}
