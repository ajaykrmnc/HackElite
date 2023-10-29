import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CategoriesItems(props) {
    const [category, setCategory] = useState(props.exactCategory);

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center m-5">
            {props.uniqueCategory.map((item, index) => (
                <div key={index} className="m-1 p-1">
                    <Button
                        variant="primary"
                        onClick={() => props.switchCategory(item)}
                    >
                        {item}
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default CategoriesItems;
