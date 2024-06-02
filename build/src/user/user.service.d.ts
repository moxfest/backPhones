import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").User[]>;
    byId(id: number, selectObject?: Prisma.UserSelect): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        name?: string;
        reviews?: import(".prisma/client").Review[];
        id?: number;
        email?: string;
        password?: string;
        isAdmin?: boolean;
        avatarPath?: string;
        phone?: string;
        orders?: import(".prisma/client").Order[];
        favorites: import(".prisma/client").Product[];
        _count?: Prisma.UserCountOutputType;
    }>;
    updateProfile(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(userId: number, productId: number): Promise<{
        message: string;
    }>;
}
