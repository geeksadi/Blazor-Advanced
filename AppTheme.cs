namespace BlazorDemo.Models;

public class AppTheme
{
    public string PrimaryColor   { get; set; } = "#5c6bc0";
    public string BackgroundColor { get; set; } = "#f0f2f5";
    public string TextColor      { get; set; } = "#1a1a2e";
    public bool   IsDarkMode     { get; set; } = false;

    public void ToggleDarkMode()
    {
        IsDarkMode = !IsDarkMode;
        if (IsDarkMode)
        {
            PrimaryColor    = "#7986cb";
            BackgroundColor = "#1a1a2e";
            TextColor       = "#e8eaf6";
        }
        else
        {
            PrimaryColor    = "#5c6bc0";
            BackgroundColor = "#f0f2f5";
            TextColor       = "#1a1a2e";
        }
    }
}
