import { router, publicProcedure, protectedProcedure } from "../../trpc";
import { z } from "zod";
import { trpc } from "../../../../utils/trpc";

export const loginRouter = router({

    findUser: publicProcedure.input(
        z.object({
            username : z.string()
        })
    ).query(( { ctx, input}) => {
        return ctx.prisma.user.findFirst({
            where: {name: input.username}
        })
    }),
    createUser: publicProcedure.input(
        z.object({
            name: z.string(),
            password: z.string(),
            email: z.string(),
            image: z.string().optional(),
        })
    ).mutation(( { ctx, input } ) => {
        const user = trpc.login.findUser.useQuery({username: input.name})
        if(user == null){
            ctx.prisma.user.create({
                data: {
                    name: input.name,
                    email: input.email,
                    image: input.image,
                }
            }); 
            return true;
        }
        else{
            return false;
        }
    })

});