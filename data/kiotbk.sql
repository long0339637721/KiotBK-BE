-- DROP DATABASE kiotbk;

create database kiotbk;
use kiotbk;

CREATE TABLE IF NOT EXISTS User(
	ID                  CHAR(6) primary key,
    FullName            VARCHAR(50),
    Sex					char(1) check(Sex in ('M', 'F')),
    BDate				DATE,
    Username            VARCHAR(50) NOT NULL unique,
    Pass                VARCHAR(50) NOT NULL,
    refreshToken        VARCHAR(256)
);
CREATE TABLE IF NOT EXISTS Admin(
	ID              	CHAR(6) primary key,
    FOREIGN KEY (AID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS Seller(
	ID              	CHAR(6) primary key,
    FOREIGN KEY (SID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS Customer(
	ID                  CHAR(6) primary key,
    FullName            VARCHAR(50),
    Sex					char(1) check(Sex in ('M', 'F')),
    BDate				DATE
);
CREATE TABLE IF NOT EXISTS Product(
	ID					CHAR(6) primary key,
    FullName			VARCHAR(50),
    TonKho				INT,
    GiaNhap				INT,
    GiaBan				INT
);
CREATE TABLE IF NOT EXISTS Invoice(
	ID					CHAR(6) primary key,
    SID                 CHAR(6) not null,
    CID                 CHAR(6),
    NgayBan				DATE,
    Total				INT,
    FOREIGN KEY (SID) REFERENCES Seller (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CID) REFERENCES Customer (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS IP(
    IID                 CHAR(6),
    PID                 CHAR(6),
    CountNumber			INT,
	GiaBan				INT,
    CONSTRAINT IP_pk PRIMARY KEY (IID, PID),
    FOREIGN KEY (IID) REFERENCES Invoice (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (PID) REFERENCES Product (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS NhapHang(
	ID					CHAR(6) primary key,
    AID                 CHAR(6) not null,
    NgayNhap			DATE,
    Total				INT check(Total >= 0),
    FOREIGN KEY (AID) REFERENCES Admin (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS NP(
    NID                 CHAR(6),
    PID                 CHAR(6),
    CountNumber			INT,
    GiaNhap				INT,
    CONSTRAINT NP_pk PRIMARY KEY (NID, PID),
    FOREIGN KEY (NID) REFERENCES NhapHang (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (PID) REFERENCES Product (ID) ON DELETE CASCADE ON UPDATE CASCADE
);