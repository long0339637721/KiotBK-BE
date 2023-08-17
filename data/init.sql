use kiotbk;

insert into user(ID, FullName, Sex, BDate, Username, Pass) values
('US0001', 'Nguyen A', 'F', '2002-07-24', 'US0001', '0000'),
('US0002', 'Nguyen B', 'M', '2002-07-24', 'US0002', '0000'),
('US0003', 'Nguyen C', 'M', '2002-07-24', 'US0003', '0000'),
('US0004', 'Nguyen D', 'M', '2002-07-24', 'US0004', '0000'),
('US0005', 'Nguyen E', 'M', '2002-07-24', 'US0005', '0000');

insert into admin values
('US0001');

insert into seller values
('US0002'),
('US0003'),
('US0004'),
('US0005');

insert into customer values
('C00001', '0000000001', 'Le A', 'M', '2002-08-12'),
('C00002', '0000000002', 'Le B', 'F', '2002-08-12'),
('C00003', '0000000003', 'Le C', 'M', '2002-08-12'),
('C00004', '0000000004', 'Le D', 'F', '2002-08-12'),
('C00005', '0000000005', 'Le E', 'M', '2002-08-12');

insert into product values
('P00001', 'Mi hao hao', 10, 2500, 3500),
('P00002', 'Mi komachi', 10, 3500, 4500),
('P00003', 'Bia 333', 5, 10000, 15000);

insert into invoice values
('I00001', 'US0002', 'C00001', '2023-07-25', 8000),
('I00002', 'US0002', 'C00002', '2023-07-25', 30000);

insert into ip values
('I00001', 'P00001', 1, 3500),
('I00001', 'P00002', 1, 4500),
('I00002', 'P00003', 2, 15000);

insert into nhaphang values
('N00001', 'US0001', '2023-07-01', 110000);

insert into np values
('N00001', 'P00001', 10, 2500),
('N00001', 'P00002', 10, 3500),
('N00001', 'P00003', 5, 2500);

















