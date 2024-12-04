@echo off
Title Digital Clock
color 0b
@mode con cols=40 lines=10
:main
cls
echo.
echo Time: %time%
echo.
echo Date: %date%
echo.
ping -n 2 0.0.0.0>nul
goto main