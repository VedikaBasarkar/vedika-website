import React, {useState} from 'react'; 

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

	return ( 
		<button> 
		<img onClick={scrollToTop} src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662382546/website/Vector_cmh7kq.svg"
		style={{display: visible ? 'inline' : 'none'}} /> 
		</button> 
	); 
} 

export default ScrollButton; 
