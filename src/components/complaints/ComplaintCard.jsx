import React from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, MapPin, Calendar, CheckCircle } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';
import PriorityBadge from '../common/PriorityBadge';
import { formatDate } from '../../utils/formatDate';

const ComplaintCard = ({ complaint, onUpvote }) => {
  return (
    <div className="card glass flex flex-col gap-3">
      <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: 'var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <h3 className="text-lg font-bold truncate" style={{ maxWidth: '60%' }} title={complaint.title}>
          {complaint.title}
        </h3>
        <StatusBadge status={complaint.status} />
      </div>
      
      <div className="flex gap-4 mt-2">
        <img 
          src={complaint.image} 
          alt="Complaint match" 
          style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
        />
        <div className="flex flex-col justify-between py-1">
          <PriorityBadge priority={complaint.priority} />
          <p className="text-muted text-xs flex items-center gap-2 mt-2">
            <MapPin size={12} /> {complaint.address}, {complaint.ward}
          </p>
          <p className="text-muted text-xs flex items-center gap-2">
            <Calendar size={12} /> {formatDate(complaint.createdAt)}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 pt-3 border-t" style={{ borderColor: 'var(--color-border)', borderTop: '1px solid var(--color-border)' }}>
        <button 
          className="btn btn-outline flex items-center gap-1"
          style={{ padding: '6px 12px', fontSize: '0.875rem', borderRadius: 'var(--radius-full)' }}
          onClick={() => onUpvote && onUpvote(complaint.id)}
        >
          <ThumbsUp size={14} color="var(--color-primary)" /> {complaint.upvotes}
        </button>
        <Link to={`/complaints/${complaint.id}`} className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ComplaintCard;
