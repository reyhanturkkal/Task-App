import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher(['/signin(.*)', '/signup(.*)']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};



// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//     matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// }


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect()
//   }
// })

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// }