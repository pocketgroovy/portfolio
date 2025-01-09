import React, { lazy, Suspense, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const componentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
    MyPortfolio: lazy(() => import('./MyPortfolio')),
    RssFeedReader: lazy(() => import('./RssFeedReader')),
    WordpressPaymentApp: lazy(() => import('./WordpressPaymentApp')),
    AIBusinessAssessment: lazy(() => import('./AIBusinessAssessment'))
    // Add other components to the map
};

export default function ProjectDetails(): ReactElement {
    const { projectTitle } = useParams<{ projectTitle: string }>();
    const Component = projectTitle ? componentMap[projectTitle] : null;

    if (!Component) {
        return <div>Component not found</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    );
}