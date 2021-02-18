import React from "react";
import { SearchIcon } from "../FavoriteList/styles";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";

import { Container, Header, Content, Card } from "./styles";

const data = [
  {
    name: "01/04",
    subscribers: 4000,
    new: 54,
  },
  {
    name: "02/04",
    subscribers: 3000,
    new: 1400,
  },
  {
    name: "03/04",
    subscribers: 2000,
    new: 3000,
  },
  {
    name: "04/04",
    subscribers: 2780,
    new: 400,
  },
  {
    name: "05/04",
    subscribers: 1890,
    new: 400,
  },
  {
    name: "06/04",
    subscribers: 2390,
    new: 812,
  },
  {
    name: "07/04",
    subscribers: 3490,
    new: 321,
  },
];

const DashboardOptions: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <ul>
            <li>
              <a href="">Pessoal</a>
            </li>

            <li>
              <a href="">Listas</a>
            </li>

            <li>
              <a href="">Quadros</a>
            </li>

            <li>
              <a href="">Calendário</a>
            </li>
          </ul>
        </div>

        <a href="#">
          <SearchIcon />
        </a>
      </Header>

      <Content>
        <Card>
          <LineChart width={500} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </Card>

        <Card>
          <LineChart width={500} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </Card>
      </Content>
    </Container>
  );
};

export default DashboardOptions;
