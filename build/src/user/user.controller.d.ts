import { UserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
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
        _count?: import(".prisma/client").Prisma.UserCountOutputType;
    }>;
    getall(): Promise<import(".prisma/client").User[]>;
    getNewTokens(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(id: number, productId: string): Promise<{
        message: string;
    }>;
}
