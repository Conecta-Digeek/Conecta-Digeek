import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { loginRouter } from "./LogIn/loginRouter";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  login: loginRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
