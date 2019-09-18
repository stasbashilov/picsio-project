import React from 'react';

const menuItems = [
    {
        classname: 'overview_icon active',
        name: 'Overview',
        icon: () => <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="2" fill="none"  ><path stroke="#9191AF" fill="#9191AF" opacity=".4" d="M1 1h5.333v5.333H1z"/><path stroke="#9191AF" fill="#9191AF" opacity=".6" d="M11.667 1H17v5.333h-5.333z"/><path stroke="#9191AF" fill="#9191AF" opacity=".8" d="M1 11.667h5.333V17H1z"/><path stroke="#9191AF" fill="#9191AF" d="M11.667 11.667H17V17h-5.333z"/></g></svg>
    },
    {
        classname: 'activity_icon',
        name: 'Activity',
        icon: () => <svg width="18" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#9191AF"  opacity=".8"><rect width="12" height="3" rx="1.5"/><rect y="6" width="18" height="3" rx="1.5"/><rect y="12" width="8" height="3" rx="1.5"/></g></svg>,
    },
    {
        classname: 'balance_icon',
        name: 'Balances',
        icon: () => <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Dashboard" stroke="none" strokeWidth="1" fill="none"  opacity="0.799999952" >
                            <g id="wallet.on-Finance-App" transform="translate(-48.000000, -198.000000)" stroke="#9191AF" strokeWidth="2">
                                <g id="wallet.on---overview">
                                    <g id="sidebar">
                                        <g id="menu" transform="translate(0.000000, 96.000000)">
                                            <g id="Balances" transform="translate(49.000000, 102.000000)">
                                                <g id="24px_wallet-90" transform="translate(0.000000, 1.000000)">
                                                    <path d="M4,1 L1.6,1 C0.716,1 0,1.67125 0,2.5 L0,2.5 C0,3.32875 0.716,4 1.6,4" id="Path"></path>
                                                    <polyline id="Path" points="4 4 4 0 14 0 14 4"></polyline>
                                                    <path d="M16,4.44444444 L1.45454545,4.44444444 C0.650909091,4.44444444 0,3.79805556 0,3 L0,13.8333333 C0,15.0300556 0.976727273,16 2.18181818,16 L16,16 L16,4.44444444 Z" id="Path"></path>
                                                    <circle id="Oval" cx="11.5" cy="10.5" r="1.5"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
    },
    {
        classname: 'debit_icon',
        name: 'Debit cards',
        icon: () => <svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Dashboard" stroke="none" strokeWidth="1" fill="none"  opacity="0.799999952">
                            <g id="wallet.on-Finance-App" transform="translate(-47.000000, -246.000000)">
                                <g id="wallet.on---overview">
                                    <g id="sidebar">
                                        <g id="menu" transform="translate(0.000000, 96.000000)">
                                            <g id="Debit-Card" transform="translate(48.000000, 148.000000)">
                                                <g id="24px_card" transform="translate(0.000000, 3.000000)">
                                                    <rect id="Rectangle" stroke="#9191AF" strokeWidth="2"  x="0" y="0" width="18" height="14" rx="2"></rect>
                                                    <rect id="Rectangle" fill="#A0A1BB" x="1" y="9" width="16" height="3"></rect>
                                                    <rect id="Rectangle" fill="#9191AF" x="8" y="3" width="4" height="4" rx="2"></rect>
                                                    <rect id="Rectangle-Copy-2" fill="#9191AF" x="11" y="3" width="4" height="4" rx="2"></rect>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
    },
    {
        classname: 'history_icon',
        name: 'History',
        icon: () => <svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Dashboard" stroke="none" strokeWidth="1" fill="none"  opacity="0.799999952">
                            <g id="wallet.on-Finance-App" transform="translate(-48.000000, -291.000000)" stroke="#9191AF" strokeWidth="2">
                                <g id="wallet.on---overview">
                                    <g id="sidebar">
                                        <g id="menu" transform="translate(0.000000, 96.000000)">
                                            <g id="History" transform="translate(49.000000, 194.000000)">
                                                <g id="24px_progress" transform="translate(0.000000, 2.000000)">
                                                    <path d="M16,8 C16,12.4184 12.4184,16 8,16 C3.5816,16 0,12.4184 0,8 C0,3.5816 3.5816,0 8,0 C11.1672,0 13.904,1.84 15.2008,4.5096" id="Path"></path>
                                                    <polyline id="Path"  points="16 1 15.5986489 5 12 4.31991786"></polyline>
                                                    <polyline id="Path"  points="8 4 8 8 4 8"></polyline>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
    },
    {
        classname: 'recipients_icon',
        name: 'Recipients',
        icon: () => <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Dashboard" stroke="none" strokeWidth="1" fill="none"  opacity="0.799999952">
                            <g id="wallet.on-Finance-App" transform="translate(-48.000000, -335.000000)" stroke="#9191AF" strokeWidth="2">
                                <g id="wallet.on---overview">
                                    <g id="sidebar">
                                        <g id="menu" transform="translate(0.000000, 96.000000)">
                                            <g id="Recipients" transform="translate(49.000000, 240.000000)">
                                                <g id="24px_business-contact-85">
                                                    <path d="M10,14.5 L12,14.5" id="Path" ></path>
                                                    <path d="M5.4368,11 L0.7768,13.7020785 C0.2952,13.9807544 0,14.4819092 0,15.0223249 L0,18 L16,18 L16,15.0223249 C16,14.4811393 15.7048,13.9799846 15.2232,13.7020785 L10.5632,11" id="Path"></path>
                                                    <path d="M3,4.70560304 C3.52517506,4.88224122 4.07702568,5 4.65221741,5 C6.28609537,5 7.76075358,4.23266857 8.82027342,3 C9.87979326,4.23266857 11.366122,5 13,5" id="Path"></path>
                                                    <path d="M3,4.71428571 C3,2.11042857 5.23833333,0 8,0 C10.7616667,0 13,2.11042857 13,4.71428571 C13,8.64285714 10.7616667,11 8,11 C5.23833333,11 3,8.64285714 3,4.71428571 Z" id="Path" ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
    },
    {
        classname: 'invite_icon',
        name: 'Invite',
        icon: () => <svg width="18" height="15" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" stroke="#9191AF" strokeWidth="2" fill="none"  opacity=".8" ><path d="M13 3L8 8 3 3"/><rect width="16" height="13" rx="2"/><path d="M4 9l-1 1M12 9l1 1"/></g></svg>,
    },
    {
        classname: 'settitngs_icon',
        name: 'Settings',
        icon: () => <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" stroke="#9191AF" strokeWidth="2" fill="none"  opacity=".8" ><circle cx="9" cy="9" r="2.455"/><path d="M15.545 9a6.586 6.586 0 00-.153-1.402l2.22-1.68-1.636-2.835-2.572 1.085a6.535 6.535 0 00-2.422-1.407L10.636 0H7.364l-.346 2.761c-.9.289-1.726.768-2.422 1.407L2.024 3.083.388 5.917l2.22 1.681a6.464 6.464 0 000 2.804l-2.22 1.68 1.636 2.835 2.572-1.085a6.535 6.535 0 002.422 1.407L7.364 18h3.272l.346-2.761a6.535 6.535 0 002.422-1.407l2.572 1.085 1.636-2.834-2.22-1.681c.1-.46.152-.93.153-1.402z"/></g></svg>,
    }
    
];

export default menuItems;
