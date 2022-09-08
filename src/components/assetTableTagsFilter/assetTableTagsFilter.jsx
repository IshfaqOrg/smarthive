import React, { Link, useLocation } from 'react-router-dom';
import { Row } from 'reactstrap';

function AssetTableTagsFilter() {
  const location = useLocation();
  return (
    <Row>
      <div className="graph-heading pl-1 py-1">
        <Link to="/assets">
          <span className={`badge ${location.pathname === '/assets' ? ' custom-tag-active' : 'custom-tag'} mr-2`}>
            All Assets
          </span>
        </Link>
        <span className="badge custom-tag mr-2">
          Endpoint
        </span>
        <Link to="/assets/patching">
          <span className={`badge ${location.pathname === '/assets/patching' ? ' custom-tag-active' : 'custom-tag'} mr-2`}>
            Patching
          </span>
        </Link>
        <span className="badge custom-tag mr-2">
          Lifecycle
        </span>
        <span className="badge custom-tag mr-2">
          Backup
        </span>
      </div>
    </Row>
  );
}

export default AssetTableTagsFilter;
