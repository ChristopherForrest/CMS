// import React from 'react';
// import Tabletop from 'tabletop';







// export default class Tester extends React.Component{
//     constructor(){
//       super()
//         this.state = {
//           data: []
//         }
//     }

//     componentDidMount(){
//       Tabletop.init({
//         key: '1E5u-bqDwzZK3acCfbRD4qWKAahNMn-hbFKojVCgcyNI',
//         callback: googleData => {
//           console.log(googleData)
//           this.setState({
//             data: googleData
//           })
//         },
//         simpleSheet:true
//       })
//     }

//     render() {
//       const { data } = this.state
//       return (
      
//           data ? (
          
          
//             <div>
//             {
//               data.map(obj => {
//                 return (
//                   <div>
//                     <p>{obj['Acid']}</p>
//                   </div>
//                 )
//               })
//             }
//           </div>
          
          
//           ) :
//             <div>no data</div>
  


//       );
//     }
//   }