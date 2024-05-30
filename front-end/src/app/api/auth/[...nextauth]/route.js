import { login } from '@/api/login'
import NextAuth from 'next-auth'
import CredencialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredencialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const email = credentials?.email
        const password = credentials?.password
        console.log('Entre al auth')
        console.log('email', email)
        console.log('password', password)

        const data = await login({ email, password })

        if (!data.success) return null

        const user = data.data

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log('Autorizado!')
          return user
        } // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    }
  }
})

export { handler as GET, handler as POST }
