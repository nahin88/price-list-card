import React from 'react';

const Link = ({route}) => {
    return (
        <li className="mr-20 text-2xl hover:bg-purple-700 p-3">
            <a href={route.path}>{ route.name}</a>
        </li>
    );
};

export default Link;