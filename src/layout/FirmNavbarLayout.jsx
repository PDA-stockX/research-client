import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "~/components/common/Header";
import SubHeader from '~/components/common/SubHeader';

export default function AnalystNavbarLayout() {
  const subMenu = [
    'return-rate',
    'achievement-score',
    'popularity'
  ]

  const subMenuName = [
    '수익률',
    '달성률',
    '인기'
  ]

  return (
    <>
      <SubHeader menu='analyst' subMenu={subMenu} subMenuName={subMenuName}/>
      <Container className="min-vh-100">
        <Outlet />
      </Container>
    </>
  );
}