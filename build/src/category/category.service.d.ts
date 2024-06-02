import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        id?: number;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }>;
    bySlug(slug: string): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        id?: number;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }>;
    getAll(): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        slug?: string;
        id?: number;
        _count?: import(".prisma/client").Prisma.CategoryCountOutputType;
        products?: import(".prisma/client").Product[];
    }[]>;
    create(): Promise<import(".prisma/client").Category>;
    update(id: number, dto: CategoryDto): Promise<import(".prisma/client").Category>;
    delete(id: number): Promise<import(".prisma/client").Category>;
}
