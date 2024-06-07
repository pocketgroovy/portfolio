import type { ReactElement } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDevelopment from './WebDevelopment';
import HireForProjects from './HireForProjects';
import RssReaderDevelopment from './RssReaderDevelopment';


export default function ServcesTabs(): ReactElement {
    return (
        <Tabs className='m-5'>
            <TabList>
                <Tab>Web Development</Tab>
                <Tab>Rss Reader</Tab>
                <Tab>Available for hire</Tab>
            </TabList>

            <TabPanel>
                <h2><WebDevelopment /></h2>
            </TabPanel>
            <TabPanel>
                <h2><RssReaderDevelopment /></h2>
            </TabPanel>
            <TabPanel>
                <h2><HireForProjects /></h2>
            </TabPanel>
        </Tabs>
    );
}