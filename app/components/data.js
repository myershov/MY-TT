import React, { Component } from 'react';
import { Progress } from 'antd';
export const data =  [{
  key: 1,
  date: 'Jul 12 2018',
  progressBar: <div>
              <p id="dev">{100 - 70}%</p>
              <p id="men">{70}%</p>
              <Progress id="prg" successPercent={70} percent={100} status={"normal"} format={() => ''} />
            </div>,
  username: 'lnlhntr',
  dailyPlan: 'Make a few assignments',
  futurePlan: 'Conquer the whole world',
}, {
  key: 2,
  date: 'Jul 12 2018',
  progressBar: <div>
              <p id="dev">{100 - 65}%</p>
              <p id="men">{65}%</p>
              <Progress id="prg" successPercent={65} percent={100} status={"normal"} format={() => ''} />
            </div>,
  username: 'Savchek',
  dailyPlan: 'Make a few assignments',
  futurePlan: 'Conquer the whole world',
}, {
  key: 3,
  date: 'Jul 12 2018',
  progressBar: <div>
              <p id="dev">{100 - 60}%</p>
              <p id="men">{60}%</p>
              <Progress id="prg" successPercent={60} percent={100} status={"normal"} format={() => ''} />
            </div>,
  username: 'Alex-135-135',
  dailyPlan: 'Make a few assignments',
  futurePlan: 'Conquer the whole world',
}];

export const columns = [{
  title: 'Date',
  dataIndex: 'date',
  key: 'date'
}, {
  title: 'Dev/Management',
  dataIndex: 'progressBar',
  key: 'progressBar'
}, {
  title: 'Username',
  dataIndex: 'username',
  key: 'username',
}, {
  title: 'Daily plan',
  dataIndex: 'dailyPlan',
  key: 'dailyPlan',
}, {
  title: 'Future plan',
  dataIndex: 'futurePlan',
  key: 'futurePlan',
}];