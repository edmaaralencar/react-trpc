import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { authClient } from '@/lib/auth'

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type FormInput = z.infer<typeof formSchema>

export function Register() {
  const { handleSubmit, register } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: FormInput) {
    console.log(values)
    // await authClient.signUp.email(
    //   {
    //     email: values.email,
    //     password: values.password,
    //     name: 'Edmar',
    //   },
    //   {
    //     onRequest: (ctx) => {
    //       console.log(ctx)
    //     },
    //     onSuccess: (ctx) => {
    //       console.log(ctx)
    //     },
    //     onError: (ctx) => {
    //       alert(ctx.error.message)
    //     },
    //   },
    // )
  }

  async function signInWithGoogle() {
    // await authClient.signIn.social({
    //   provider: 'google',
    //   callbackURL: '/app',
    // })
  }

  return (
    <div className="grid place-items-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro</CardTitle>
          <CardDescription>
            Digite seu email para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register('email')}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>Senha</Label>
                <Link
                  to="/esqueci-a-senha"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input
                type="password"
                placeholder="*******"
                {...register('password')}
              />
            </div>
            <Button type="submit" className="w-full">
              Criar conta
            </Button>
            <Button
              type="button"
              onClick={signInWithGoogle}
              variant="outline"
              className="w-full"
            >
              Entrar com Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{' '}
            <Link to="/login" className="underline">
              Entre agora
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
