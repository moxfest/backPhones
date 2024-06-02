import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").User[]>;
    setAdmin(idd: number): Promise<import(".prisma/client").User>;
    byId(id: number, selectObject?: Prisma.UserSelect): Promise<{
        createdAt?: Date;
        updatedAt?: Date;
        email?: string;
        password?: string;
        isAdmin?: boolean;
        name?: string;
        avatarPath?: string;
        phone?: string;
        orders?: import(".prisma/client").Order[];
        reviews?: import(".prisma/client").Review[];
        favorites: import(".prisma/client").Product[];
        id?: number;
        _count?: Prisma.UserCountOutputType;
    }>;
    updateProfile(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(userId: number, productId: number): Promise<{
        message: string;
    }>;
}
