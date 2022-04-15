import React from 'react';
import PropTypes from 'prop-types';

import { Menu} from '@headlessui/react';

export default function MoreOptions({ children, actions }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="focus:outline-none">
                {children}
            </Menu.Button>
                <Menu.Items className="absolute min-w-max z-10 right-0 mt-0 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {actions?.map((item) => (
                            <Menu.Item key={item?.label}>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        onClick={item?.onClick}
                                        className={`${active ? 'bg-primary text-bgColor' : 'text-gray-900'
                                            } hover:bg-bgMain hover:text-white flex rounded-md w-full px-2 py-2 text-sm`}
                                    >
                                        {item?.label}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
        </Menu>
    );
}

MoreOptions.propTypes = {
    children: PropTypes.node,
    actions: PropTypes.arrayOf(
        PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func })
    )
};

MoreOptions.defaultProps = {
    children: 'Button',
    actions: []
};
