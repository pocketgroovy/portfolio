import type { ReactElement } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceDetails from './ServiceDetails';
import HireForProjects from './HireForProjects';


export default function ServcesTabs(): ReactElement {
    return (
        <Tabs className='m-5'>
            <TabList>
                <Tab>Web Development</Tab>
                <Tab>Available for hire</Tab>
            </TabList>

            <TabPanel>
                <h2><ServiceDetails /></h2>
            </TabPanel>
            <TabPanel>
                <h2><HireForProjects /></h2>
            </TabPanel>
        </Tabs>
    );
}