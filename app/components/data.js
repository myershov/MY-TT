import React from 'react';
import { Progress} from "antd";

export const data =  [{
  key: 1,
  date: 'Jul 12 2018',
  progressBar: <div>
              <div><p id='dev'>Dev</p><p id='man'>Management</p></div>
              <Progress type="circle"  percent={50} width={70}  />
              <Progress type="circle"  percent={50} width={70} />
            </div>,
  username: 'lnlhntr',
  dailyPlan: 'Make a few assignments',
  futurePlan: 'Conquer the whole world',
}, {
  key: 2,
  date: 'Jul 12 2018',
  progressBar: <div>
              <div><p id='dev'>Dev</p><p id='man'>Management</p></div>
              <Progress type="circle"  percent={50} width={70}  />
              <Progress type="circle"  percent={50} width={70} />
            </div>,
  username: 'Savchek',
  dailyPlan: 'Make a few assignments',
  futurePlan: 'Conquer the whole world',
}, {
  key: 3,
  date: 'Jul 12 2018',
  progressBar: <div>
              <div><p id='dev'>Dev</p><p id='man'>Management</p></div>
              <Progress type="circle"  percent={50} width={70}  />
              <Progress type="circle"  percent={50} width={70} />
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