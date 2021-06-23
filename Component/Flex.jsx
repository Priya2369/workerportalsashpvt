import style from './Flex.module.css';
import Search from './parentsComnents/Search'
const Flex = (props) => {
	return (
		<div className={style.flex}> 
            
           <Search/> 
        </div>
	);
};

export default Flex;
