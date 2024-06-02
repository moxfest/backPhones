import { ReviewDto } from './review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
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
    leaveReview(id: number, dto: ReviewDto, productId: string): Promise<import(".prisma/client").Review>;
    getAverageByProduct(productId: string): Promise<{
        rating: number;
    }>;
}
