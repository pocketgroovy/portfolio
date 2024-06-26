import type { ReactElement } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Career from './Career';
import Education from './Education';
import Certificates from './Certificates';
import Technologies from './Technologies';


export default function ExperienceTabs(): ReactElement {
    return (
        <Tabs className='m-5'>
            <TabList>
                <Tab>Experience</Tab>
                <Tab>Education</Tab>
                <Tab>Certificates</Tab>
                <Tab>Tech</Tab>
            </TabList>

            <TabPanel>
                <h2><Career /></h2>
            </TabPanel>
            <TabPanel>
                <h2><Education /></h2>
            </TabPanel>
            <TabPanel>
                <h2><Certificates /></h2>
            </TabPanel>
            <TabPanel>
                <h2><Technologies /></h2>
            </TabPanel>
        </Tabs>
    );
}