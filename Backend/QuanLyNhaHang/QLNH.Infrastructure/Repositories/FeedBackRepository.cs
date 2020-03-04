using QLNH.Infrastructure.Data;
using QLNH.Infrastructure.Entities;
using QLNH.Infrastructure.Repositories.Interfaces;

namespace QLNH.Infrastructure.Repositories
{
    public class FeedBackRepository : RepositoryBase<FeedBacks, int>, IFeedBackRepository
    {
        private QLNHDbContext _context;

        public FeedBackRepository(QLNHDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
