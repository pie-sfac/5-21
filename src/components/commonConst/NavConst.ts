import NavEmployeeDefault from '../../assets/icon-nav-group.svg';
import NavEmployeeHover from '../../assets/icon-nav-group-hover.svg';

import NavTicketDefault from '../../assets/icon-nav-ticket.svg';
import NavTicketHover from '../../assets/icon-nav-ticket-hover.svg';

import NavRecordDefault from '../../assets/icon-nav-record.svg';
import NavRecordHover from '../../assets/icon-nav-record-hover.svg';

import NavMediaDefault from '../../assets/icon-nav-media.svg';
import NavMediaHover from '../../assets/icon-nav-media-hover.svg';

import NavdbDefault from '../../assets/icon-nav-db.svg';
import NavdbHover from '../../assets/icon-nav-db-hover.svg';

import NavAlarmDefault from '../../assets/icon-nav-notifications.svg';
import NavAlarmHover from '../../assets/icon-nav-notifications-hover.svg';

import NavInfoDefault from '../../assets/icon-nav-info.svg';
import NavInfoHover from '../../assets/icon-nav-info-hover.svg';

export const menu = [
    {
        id: 0,
        name: '직원 관리',
        path: '/employee',
        iconDefault: NavEmployeeDefault,
        iconHover: NavEmployeeHover,
    },
    {
        id: 1,
        name: '수강권 관리',
        path: '/ticket',
        iconDefault: NavTicketDefault,
        iconHover: NavTicketHover,
    },
    {
        id: 2,
        name: '기록 관리',
        path: '/record',
        iconDefault: NavRecordDefault,
        iconHover: NavRecordHover,
    },
    {
        id: 3,
        name: '미디어 관리',
        path: '/media',
        iconDefault: NavMediaDefault,
        iconHover: NavMediaHover,
    },
    {
        id: 4,
        name: '운영 데이터',
        path: '/manage',
        iconDefault: NavdbDefault,
        iconHover: NavdbHover,
    },
    {
        id: 5,
        name: '알림메시지',
        path: '/alert',
        iconDefault: NavAlarmDefault,
        iconHover: NavAlarmHover,
    },
    {
        id: 6,
        name: '센터 정보',
        path: '/center',
        iconDefault: NavInfoDefault,
        iconHover: NavInfoHover,
    },
];
