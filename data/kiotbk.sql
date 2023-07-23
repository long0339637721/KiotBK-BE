CREATE DATABASE kiotbk;
USE kiotbk;

CREATE TABLE User(
	ID                  CHAR(6) primary key,
    FullName            VARCHAR(50),
    Sex					char(1) check(Sex in ('M', 'F')),
    BDate				DATE,
    Username            VARCHAR(50) NOT NULL unique,
    Pass                VARCHAR(50) NOT NULL,
    refreshToken        VARCHAR(256)
);
CREATE TABLE Admin(
	AID              	CHAR(6) primary key,
    FOREIGN KEY (AID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Seller(
	SID              	CHAR(6) primary key,
    FOREIGN KEY (SID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Customer(
	ID                  CHAR(6) primary key,
    FullName            VARCHAR(50),
    Sex					char(1) check(Sex in ('M', 'F')),
    BDate				DATE
);
CREATE TABLE Product(
	ID					CHAR(6) primary key,
    FullName			VARCHAR(50),
    TonKho				INT check(TonKho >= 0),
    GiaNhap				INT check(GiaNhap >= 0),
    GiaBan				INT check(GiaBan >= 0)
);
CREATE TABLE Invoice(
	ID					CHAR(6) primary key,
    SID                 CHAR(6) not null,
    CID                 CHAR(6),
    NgayBan				DATE,
    Total				INT check(Total >= 0),
    FOREIGN KEY (SID) REFERENCES Seller (SID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CID) REFERENCES Customer (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IP(
    IID                 CHAR(6),
    PID                 CHAR(6),
    CountNumber			INT check(CountNumber >= 0),
    CONSTRAINT IP_pk PRIMARY KEY (IID, PID),
    FOREIGN KEY (IID) REFERENCES Invoice (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (PID) REFERENCES Product (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE NhapHang(
	ID					CHAR(6) primary key,
    AID                 CHAR(6) not null,
    NgayNhap			DATE,
    Total				INT check(Total >= 0),
    FOREIGN KEY (AID) REFERENCES Admin (AID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE NP(
    NID                 CHAR(6),
    PID                 CHAR(6),
    CountNumber			INT check(CountNumber >= 0),
    CONSTRAINT NP_pk PRIMARY KEY (NID, PID),
    FOREIGN KEY (NID) REFERENCES NhapHang (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (PID) REFERENCES Product (ID) ON DELETE CASCADE ON UPDATE CASCADE
);