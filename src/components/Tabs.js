// moving between different tabs of the selected todos state of work
import { TABS } from "../redux/actions/type";

import { useDispatch } from 'react-redux';

import { toggleTab } from "../redux/actions";


export const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        // using the button styled tabs to show which tab is active and what todos are init
        // loop tabs using map tab will be passed by dispatch to work with it in the action index.js file to what to perform
        TABS.map(tab => (
            <button
                 
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}
