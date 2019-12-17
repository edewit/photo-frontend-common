
import { Brand, Dropdown, DropdownToggle, Page, PageHeader, PageSection, PageSectionVariants, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import style from './layout.module.scss';
import { BarsIcon } from '@patternfly/react-icons';

interface LayoutProps {
  children: ReactNode;
  userDropdownItems: any[];
};

export const Layout: FunctionComponent<LayoutProps> = (props) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const PageToolbar = (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarItem>
          <Dropdown
            isPlain
            position="right"
            onSelect={() => setIsUserDropdownOpen((prev) => !prev)}
            isOpen={isUserDropdownOpen}
            toggle={<DropdownToggle onToggle={(val: boolean) => setIsUserDropdownOpen(val)}><BarsIcon></BarsIcon></DropdownToggle>}
            dropdownItems={props.userDropdownItems}
          />
        </ToolbarItem>
      </ToolbarGroup>
    </Toolbar>
  );

  const Header = (
    <PageHeader
      logo={<Brand src={logo} alt="logo" className={style.brand} />}
      logoProps={{ href: "/" }}
      toolbar={PageToolbar}
      className={style.header}
    />
  );

  return (
    <Router>
      <Page header={Header} className={style.page}>
        <PageSection variant={PageSectionVariants.light}>
          {props.children}
        </PageSection>
      </Page>
    </Router>
  );
}

