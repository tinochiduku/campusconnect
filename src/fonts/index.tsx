// import { Poppins, Outfit, } from 'next/font/google'
import localFont from 'next/font/local'

// const poppins_font = Poppins({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// })

// const outfit_font = Outfit({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// })

export const clash_grotesk = localFont({
    src : [
        {
            path: './fonts/ClashGrotesk-Extralight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: './fonts/ClashGrotesk-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/ClashGrotesk-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/ClashGrotesk-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/ClashGrotesk-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/ClashGrotesk-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ]
})
 

// export const poppins = poppins_font.className
// export const outfit = outfit_font.className
