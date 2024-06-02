import { CategoryDto } from './category.dto';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        id?: number;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }[]>;
    getBySlug(slug: string): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        id?: number;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }>;
    getById(id: string): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        id?: number;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }>;
    create(): Promise<import(".prisma/client").Category>;
    update(id: string, dto: CategoryDto): Promise<import(".prisma/client").Category>;
    delete(id: string): Promise<import(".prisma/client").Category>;
}
