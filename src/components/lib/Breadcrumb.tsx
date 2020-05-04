import React, { Component } from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { BreadcrumbProps } from "antd/lib/breadcrumb";
import { Link } from "react-router-dom";

type Crumb = {
  name: string;
  icon?: string;
  to?: string;
};

type Props = {
  crumbs: Crumb[];
};

class Breadcrumb extends Component<Props & BreadcrumbProps> {
  breadcrumbContent(crumb: Crumb) {
    return (
      <>
        <span className='crumb-item'> {crumb.name}</span>
      </>
    );
  }

  breadcrumbItem(crumb: Crumb) {
    if (crumb.to)
      return (
        <AntBreadcrumb.Item>
          <Link to={crumb.to}>{this.breadcrumbContent(crumb)}</Link>
        </AntBreadcrumb.Item>
      );
    return <AntBreadcrumb.Item>{this.breadcrumbContent(crumb)}</AntBreadcrumb.Item>;
  }

  render() {
    return (
      <AntBreadcrumb routes={[]} {...this.props}>
        {this.props.crumbs.map(this.breadcrumbItem.bind(this))}
      </AntBreadcrumb>
    );
  }
}

export default Breadcrumb;

