/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,
    images : {
        
        remotePatterns : [
            {
                protocol: "https",
                hostname: "www.googleapis.com",
                pathname: "**",
            }
           

        ],
          
        remotePatterns : [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**",
            }
           

        ]
       
    }
};

export default nextConfig;
