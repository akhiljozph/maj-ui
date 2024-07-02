import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ExpLanding from './modules/expense-manager/exp-landing/ExpLanding'

// import Majui from './components/maj-ui/MajUi'
// import MajButton from './components/maj-button/MajButton'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <Majui backgroundColor="#644040" color="#ffad0d" />

        <div className='maj-ui-desc'>
            MAJui offers a comprehensive suite of free UI tools to help you ship
            new features faster. Start with MAJui, our fully loaded component library or
            bring your own design system to our production-ready components.
        </div>
        <div className="maj-btn-doc">
            <MajButton link={'https://127.0.0.1:8090/'}>Discover our components</MajButton>
        </div> */}

        <ExpLanding />

    </React.StrictMode>,
)
