import style from './Flex.module.css';
import Search from './parentsComnents/Search'
const Flex = (props) => {
	return (
		<div className={style.flex}> 
             {/* <div class="rectangle"><img src="mosahay.png" style="width:300px ;height:290px "></div>  
             <div class="rectangle"><img src="mosahay.png" style="max-width:100%;height:auto;"></div>       */}
            <div >{props.line1} </div>
           <div >{props.line2}</div>
           <div >{props.line3}</div>   
           <Search/> 
        </div>
	);
};

export default Flex;
