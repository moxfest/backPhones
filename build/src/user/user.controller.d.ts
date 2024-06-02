import { UserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
        id?: number;
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
        _count?: import(".prisma/client").Prisma.UserCountOutputType;
    }>;
    getall(): Promise<import(".prisma/client").User[]>;
    setAdmin(id: string): Promise<import(".prisma/client").User>;
    getNewTokens(id: number, dto: UserDto): Promise<import(".prisma/client").User>;
    toggleFavorite(id: number, productId: string): Promise<{
        message: string;
    }>;
}
