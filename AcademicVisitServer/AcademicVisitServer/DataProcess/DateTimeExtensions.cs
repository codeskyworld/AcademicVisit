namespace AcademicVisitServer
{
    public static class DateTimeExtensions
    {
        public static DateTime? SetKindUtcWay(DateTime? dateTime)
        {
            if (dateTime.HasValue)
            {
                return dateTime.Value.SetKindUtc();
            }
            else
            {
                return null;
            }
        }
        public static DateTime SetKindUtc(this DateTime dateTime)
        {
            if (dateTime.Kind == DateTimeKind.Utc) { return dateTime; }
            return DateTime.SpecifyKind(dateTime, DateTimeKind.Utc);
        }

        public static DateTime? ConvertTimeFormat(string? timeOfString)
        {
            if (string.IsNullOrEmpty(timeOfString))
            {
                return DateTime.MinValue;
            }

            long ltime = long.Parse(timeOfString);
            DateTimeOffset dateTimeOffset = DateTimeOffset.FromUnixTimeMilliseconds(ltime);
            DateTime dateTimeTemporary = dateTimeOffset.DateTime;
            DateTime? dateTime = SetKindUtcWay(dateTimeTemporary);

            return dateTime;
        }
    }
}
