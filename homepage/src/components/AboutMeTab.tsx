import { ReactElement } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function AboutMeTab(): ReactElement {
    return (
        <Tabs className='m-5'>
            <TabList>
                <Tab>My Careers</Tab>
                <Tab>My Interests</Tab>
            </TabList>

            <TabPanel>
                <h2>work work work</h2>
            </TabPanel>
            <TabPanel>
                <h2>play play play</h2>
            </TabPanel>
        </Tabs>
    );
}