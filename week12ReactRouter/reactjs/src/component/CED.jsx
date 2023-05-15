function CED(props){
   return(
       <div> 
        <h2 className="text-center text-dark" style={{background:'#FA8072'}}>CED COMPONENT</h2>
             <div>ID: {props.stdInfo.id}</div>
             <div>Name: {props.stdInfo.name}</div>
             <div>Tel: {props.stdInfo.tel}</div>
       </div>
   );
}
export default CED;