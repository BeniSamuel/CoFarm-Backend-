import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor ( private jwtService: JwtService ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();
            const token = this.extractTokenFromHeaders(request);

            if (!token) { throw new UnauthorizedException("Not Authorized to perform action") };
            const payload = await this.jwtService.verifyAsync(token, {secret: "hello world"})
            request['user'] = payload;
        }
        catch (error) {
            console.error("Authorization Error: ", error);
            throw new UnauthorizedException(
                { message: "You are not authorized"}
            )
        }
        return true;
    }

    private extractTokenFromHeaders (request: Request): string {
        const [ type, token ] = request.headers.authorization.split(" ");
        return type === "Bearer" ? token : undefined;
    }
}