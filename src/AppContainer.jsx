import React, { Component } from 'react';
import GraphContainer from './components/Graph';
import SearchContainer from './components/SearchContainer/SearchContainer';
import SpotlightContainer from './components/Spotlight/SpotlightContainer';
import LogoutModal from './components/Modals/LogoutModal';
import ClearWarnModal from './components/Modals/ClearWarnModal'
import ClearConfirmModal from './components/Modals/ClearConfirmModal'
import ClearingModal from './components/Modals/ClearingModal'
import LoadingContainer from './components/Float/LoadingContainer';
import GenericAlert from './components/Float/Alert';
import RawQuery from './components/RawQuery';
import MenuContainer from './components/Menu/MenuContainer';
import ExportContainer from './components/Float/ExportContainer';
import Settings from './components/Float/Settings'
import ZoomContainer from './components/Zoom/ZoomContainer'
import QueryNodeSelect from './components/Float/QueryNodeSelect'

export default class AppContainer extends Component {
	constructor(){
		super();
	}

	render() {
		return (
			<div className="max">
				<GenericAlert />
				<ExportContainer />
				<LoadingContainer />
				<SpotlightContainer />
				<GraphContainer />
				<SearchContainer />
				<LogoutModal />
				<ClearWarnModal />
				<ClearConfirmModal />
				<ClearingModal />
				<RawQuery />
				<MenuContainer />
				<Settings />
				<ZoomContainer />
				<QueryNodeSelect />
			</div>
		);
	};
}