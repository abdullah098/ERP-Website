import React from 'react';
import tv5 from '../../Assets/TV5.png';
import viva from '../../Assets/viva.png';
import martin from '../../Assets/martin.png';
import falken from '../../Assets/falken.png';


const Brands = () => {
    const brands = [tv5, martin, viva, falken];
    return ( 
        <>
            <div className="brands border border-primary text-center ">
                {brands.map(brand => ( 
                    <img className="brand-image" width={150} src={brand} alt="brand" key={brand}/>
                ))}
            </div>
        </>
     );
}
 
export default Brands;