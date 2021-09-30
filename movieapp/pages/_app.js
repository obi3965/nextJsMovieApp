import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
         
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>       
         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
        
        </Head>
     <Component {...pageProps} />

     </>
  )
  
  
 
}

export default MyApp

// class MovieApp extends App {
//   render(){
//     const { Component } = this.props
//     return (
//       <>
//       <Head>
//         <title>Home</title>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
//         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
//       </Head>
//       <Navbar />
//       <Component />
      
//       </>
//     )
//   }
// }


// export default MovieApp
